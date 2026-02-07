export function maskOnlyNumbers(value: string): string {
  return value.replace(/\D/g, '');
}
