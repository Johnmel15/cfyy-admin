export const getUserPermissions = (roles: any[]) => {
  return roles?.reduce((acc: string[], role: any) => {
    return acc.concat(role.permissions || []);
  }, []);
};
