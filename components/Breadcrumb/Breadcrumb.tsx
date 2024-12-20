import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { routesConfig } from '@/routes/index'; // Import the configuration

interface Breadcrumb {
  name: string;
  href: string;
}

const Breadcrumb: React.FC = () => {
  const getRouteName = (route: string): string => {
    if (route in routesConfig) {
      return routesConfig[route as keyof typeof routesConfig];
    }
    return route.charAt(0).toUpperCase() + route.slice(1);
  };

  const generateBreadcrumbs = (path: string): Breadcrumb[] => {
    const segments = path.split('/').filter(Boolean);

    let breadcrumbPath = '';
    return segments.map((segment) => {
      breadcrumbPath += `/${segment}`;
      return { name: getRouteName(segment), href: breadcrumbPath };
    });
  };

  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumbs(pathname);

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-4 text-sm text-gray-600">
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={breadcrumb.href}>
            {/* Only show separator if not the last breadcrumb */}
            {index > 0 && (
              <li>
                <span className="text-gray-400">/</span>
              </li>
            )}
            <li>
              {index === breadcrumbs.length - 1 ? (
                <span className="font-semibold text-gray-800" aria-current="page">
                  {breadcrumb.name}
                </span>
              ) : (
                <Link
                  href={breadcrumb.href}
                  className="text-blue-600 hover:text-blue-800 transition duration-200"
                >
                  {breadcrumb.name}
                </Link>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
