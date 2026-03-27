const downloadUrls = {
  mac: 'https://github.com/scholarkit/apexscholar-desktop/releases/download/untagged-f93fc371a09e217db9d8/apexscholar_0.0.3_aarch64.dmg',
  windows: 'https://github.com/scholarkit/apexscholar-desktop/releases/download/untagged-f93fc371a09e217db9d8/apexscholar_0.0.3_x64-setup.exe',
  linux: 'https://github.com/scholarkit/apexscholar-desktop/releases/download/untagged-f93fc371a09e217db9d8/apexscholar_0.0.3_amd64.deb'
};

function getOS(): 'mac' | 'windows' | 'linux' | null {
  if (typeof window === 'undefined') return null;

  const ua = window.navigator.userAgent.toLowerCase();

  if (ua.includes('mac')) return 'mac';
  if (ua.includes('win')) return 'windows';
  if (ua.includes('linux')) return 'linux';

  return null;
}

export function getDownloadUrl(): string {
  const os = getOS();
  if (!os) {
    // Fallback to a landing page or GitHub releases if OS not detected
    return 'https://github.com/scholarkit/apexscholar-desktop/releases';
  }
  return downloadUrls[os];
}

export function detectOS(): string {
  const os = getOS();
  if (!os) return 'Unknown';
  return os.charAt(0).toUpperCase() + os.slice(1);
}
