export const getBadgeClass = (status: string) => {
  switch (status) {
    case 'approved':
      return `bg-green-700  hover:bg-green-500`;
    case 'pending':
      return `bg-amber-500  hover:bg-amber-300`;
    case 'inmoderation':
      return `bg-indigo-500 hover:bg-indigo-300`;
    case 'rejected':
      return `bg-red-700 hover:bg-red-500`;
    default:
      return ``;
  }
};
