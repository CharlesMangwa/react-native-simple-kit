/* @flow */

export const rgba = (value: string, opacity: number = 1): string => {
  const isHex = (hex: string): boolean =>
    /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex)

  if (!isHex(value))
    throw new Error("rgba() requires hex values (ie: '#FF3300')")

  const hexToRGB = (hex: string): ?string => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i

    const longHex = hex.replace(
      shorthandRegex,
      (m, r, g, b) => r + r + g + g + b + b
    )

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(longHex)

    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
          result[3],
          16
        )}`
      : null
  }

  const rgb = hexToRGB(value)

  return rgb ? `rgba(${rgb}, ${opacity})` : value
}
