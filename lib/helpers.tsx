export function _numberFormat(number: number) {
  const formatter = Intl.NumberFormat('en', { notation: 'standard' });
  const formattedNumber = formatter.format(number);
  return formattedNumber;
}

export function _formatNowDate() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date();
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return `${day} ${months[monthIndex]} ${year}`; // output: "2 May 2023"
}

export function _formatNowDateFull() {
  const date = new Date();

  // const options = {
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric",
  //   hour: "numeric",
  //   minute: "numeric",
  //   hour12: true,
  // };

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(date);
  // console.log(formattedDate); // output: "3 April 2023 2:13 AM"
  return formattedDate;
}

export function _dateFormater(date: Date): string {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    // hour: 'numeric',
    // minute: 'numeric',
    // hour12: true,
  }).format(date);
  // console.log(formattedDate); // output: "3 April 2023 2:13 AM"
  return formattedDate;
}

export function _sortNames<T extends { name: string }>(array: T[]): T[] {
  return [...array].sort((a, b) => a.name.localeCompare(b.name));
}

export function _getLocalImageUrl(imageFile: Blob | File): string {
  // first release image memory, just in case to avoid memory leaks
  URL.revokeObjectURL(URL.createObjectURL(imageFile));
  const imageUrl = URL.createObjectURL(imageFile);
  return imageUrl;
}
