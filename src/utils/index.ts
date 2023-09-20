export function calculateAge(birthday: any) {
  var ageDifMs = Date.now() - birthday;
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export function generateAvatar(name: string) {
  return `https://ui-avatars.com/api/?name=${name}&background=random`;
}

export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }

  if (maxLength < 3) {
    return text.slice(0, maxLength);
  }

  return text.slice(0, maxLength - 3) + '...';
}

export function getRandomLightColor() {
  // Generate random values for hue (0-360) and saturation (30-100).
  const hue = Math.floor(Math.random() * 361);
  const saturation = Math.floor(Math.random() * 71) + 30; // range: 30-100

  // Convert HSL to RGB with a higher lightness value (35-70%) for a lighter color.
  const rgb = hslToRgb(hue, saturation, Math.floor(Math.random() * 26) + 35); // range: 35-70

  // Convert the RGB components to a hexadecimal string representation.
  const colorHex = `#${componentToHex(rgb[0])}${componentToHex(rgb[1])}${componentToHex(rgb[2])}`;

  return colorHex;
}

function hslToRgb(h: number, s: number, l: number) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function componentToHex(component: number) {
  const hex = component.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

export function matchRoute(route: string, basePath: string, exact = false): boolean {
  if (exact) {
    return route === basePath;
  }
  // Create a regular expression pattern based on the dashboard base path
  const dashboardPattern = new RegExp(`^${basePath}(/[a-zA-Z0-9_-]+)*$`);

  // Check if the route matches the dashboard pattern
  return dashboardPattern.test(route);
}

export function CheckElectionStatus(_startDate: Date, _endDate: Date) {
  const currentDate: Date = new Date();
  const startDate = new Date('10/09/2023');
  const endDate = new Date(_endDate);

  // Extract the day, month, and year components of the dates
  const currentDay: Date = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const startDay: Date = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate()
  );
  const endDay: Date = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
  console.log(currentDay, startDay);

  // Compare the current day with the start and end days
  if (currentDay > startDay) {
    return 'Not started';
  }
  if (currentDay >= startDay && currentDay <= endDay) {
    return 'Active'; // User can vote
  } else {
    return 'Ended'; // User cannot vote
  }
}

// // Example usage:
// const startDate: Date = new Date('2023-09-17'); // Replace with your start date
// const endDate: Date = new Date('2023-09-17'); // Replace with your end date

// if (CheckElectionStatus(startDate, endDate)) {
//   console.log('You can vote!');
// } else {
//   console.log('Voting is not allowed today.');
// }

enum ElectionStatus {
  NotStarted,
  Active,
  Ended,
}

function _getElectionStatus(startDate: Date, endDate: Date): ElectionStatus {
  const currentDate: Date = new Date();
  const currentDay: number = currentDate.getDate();
  const currentMonth: number = currentDate.getMonth();
  const currentYear: number = currentDate.getFullYear();

  const startDay: number = new Date(startDate).getDate();
  const startMonth: number = new Date(startDate).getMonth();
  const startYear: number = new Date(startDate).getFullYear();

  const endDay: number = new Date(endDate).getDate();
  const endMonth: number = new Date(endDate).getMonth();
  const endYear: number = new Date(endDate).getFullYear();

  if (
    currentYear < startYear ||
    (currentYear === startYear &&
      (currentMonth < startMonth || (currentMonth === startMonth && currentDay < startDay)))
  ) {
    return ElectionStatus.NotStarted;
  } else if (
    currentYear > endYear ||
    (currentYear === endYear &&
      (currentMonth > endMonth || (currentMonth === endMonth && currentDay > endDay)))
  ) {
    return ElectionStatus.Ended;
  } else {
    return ElectionStatus.Active;
  }
}

export function getElectionStatus(startDate: Date, endDate: Date) {
  const electionStatus: ElectionStatus = _getElectionStatus(startDate, endDate);

  switch (electionStatus) {
    case ElectionStatus.NotStarted:
      return 'Pending';
      break;
    case ElectionStatus.Active:
      return 'Active';
      break;
    case ElectionStatus.Ended:
      return 'Completed';
      break;
    default:
      return 'Invalid election status.';
  }
}
