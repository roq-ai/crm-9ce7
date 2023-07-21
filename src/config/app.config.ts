interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Client'],
  tenantRoles: ['Administrator', 'Manager', 'Analyst', 'Team Member'],
  tenantName: 'Organization',
  applicationName: 'crm',
  addOns: ['notifications'],
};
