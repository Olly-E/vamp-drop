export const userKeys = {
  all: ["user"] as const,
  lists: () => [...userKeys.all, "list"] as const,
  list: (id: string) => [...userKeys.all, "list", id] as const,
  details: () => [...userKeys.all, "detail"] as const,
  detail: (id: string) => [...userKeys.details(), id] as const,
};

export const clientKeys = {
  all: ["client"] as const,
  lists: () => [...clientKeys.all, "list"] as const,
  list: (id: string) => [...clientKeys.all, "list", id] as const,
  details: () => [...clientKeys.all, "detail"] as const,
  detail: (id: string) => [...clientKeys.details(), id] as const,
};

export const contactKeys = {
  all: ["contact"] as const,
  lists: () => [...contactKeys.all, "list"] as const,
  list: (id: string) => [...contactKeys.all, "list", id] as const,
  details: () => [...contactKeys.all, "detail"] as const,
  detail: (id: string) => [...contactKeys.details(), id] as const,
};

export const taskKeys = {
  all: ["task"] as const,
  lists: () => [...taskKeys.all, "list"] as const,
  list: (id: string) => [...taskKeys.all, "list", id] as const,
  details: () => [...taskKeys.all, "detail"] as const,
  detail: (id: string) => [...taskKeys.details(), id] as const,
};

export const projectKeys = {
  all: ["project"] as const,
  lists: () => [...projectKeys.all, "list"] as const,
  list: (id: string) => [...projectKeys.all, "list", id] as const,
  details: () => [...projectKeys.all, "detail"] as const,
  detail: (id: string) => [...projectKeys.details(), id] as const,
};

export const teamMembersKey = {
  all: ["teamMembers"] as const,
  lists: () => [...teamMembersKey.all, "list"] as const,
  list: (id: string) => [...teamMembersKey.all, "list", id] as const,
  details: () => [...teamMembersKey.all, "detail"] as const,
  detail: (id: string) => [...teamMembersKey.details(), id] as const,
};

export const teamMemberGeneralKey = {
  all: ["teamMembersGeneral"] as const,
  lists: () => [...teamMemberGeneralKey.all, "list"] as const,
  list: (id: string) => [...teamMemberGeneralKey.all, "list", id] as const,
  details: () => [...teamMemberGeneralKey.all, "detail"] as const,
  detail: (id: string) => [...teamMemberGeneralKey.details(), id] as const,
};

export const timeKeys = {
  all: ["time"] as const,
  lists: () => [...timeKeys.all, "list"] as const,
  list: (id: string) => [...timeKeys.all, "list", id] as const,
  details: () => [...timeKeys.all, "detail"] as const,
  detail: (id: string) => [...timeKeys.details(), id] as const,
};

export const logActionKeys = {
  all: ["logAction"] as const,
  lists: () => [...logActionKeys.all, "list"] as const,
  list: (id: string) => [...logActionKeys.all, "list", id] as const,
  details: () => [...logActionKeys.all, "detail"] as const,
  detail: (id: string) => [...logActionKeys.details(), id] as const,
};

export const unSubmittedLogsKeys = {
  all: ["unSubmittedLogsKeys"] as const,
  lists: () => [...unSubmittedLogsKeys.all, "list"] as const,
  list: (id: string) => [...unSubmittedLogsKeys.all, "list", id] as const,
  details: () => [...unSubmittedLogsKeys.all, "detail"] as const,
  detail: (id: string) => [...unSubmittedLogsKeys.details(), id] as const,
};

export const approvedKeys = {
  all: ["approved"] as const,
  lists: () => [...approvedKeys.all, "list"] as const,
  list: (id: string) => [...approvedKeys.all, "list", id] as const,
  details: () => [...approvedKeys.all, "detail"] as const,
  detail: (id: string) => [...approvedKeys.details(), id] as const,
};

export const invoiceKeys = {
  all: ["invoice"] as const,
  lists: () => [...invoiceKeys.all, "list"] as const,
  list: (id: string) => [...invoiceKeys.all, "list", id] as const,
  details: () => [...invoiceKeys.all, "detail"] as const,
  detail: (id: string) => [...invoiceKeys.details(), id] as const,
};

export const invoiceLogs = {
  all: ["invoiceLogs"] as const,
  lists: () => [...invoiceLogs.all, "list"] as const,
  list: (id: string) => [...invoiceLogs.all, "list", id] as const,
  details: () => [...invoiceLogs.all, "detail"] as const,
  detail: (id: string) => [...invoiceLogs.details(), id] as const,
};
