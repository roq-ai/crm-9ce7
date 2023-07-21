const mapping: Record<string, string> = {
  dashboards: 'dashboard',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
