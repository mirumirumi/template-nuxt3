export const round = (value: number, base = 6): number => {
  return Math.round(value * (10**base)) / (10**base)
}

export const delay = (msec: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, msec)
  })
}

export const toBool = (data: string): boolean => {
  return data.toLowerCase() === "true"
}

// こっから下はたぶんlodashに全部あるので置き換えるようにする

export const deepCopy = (data: Record<string, unknown>): Record<string, unknown> => {
  return JSON.parse(JSON.stringify(data))
}

export function isEmpty(obj: Record<string, unknown>): boolean {
  return !Object.keys(obj).length
}

export function isSameObjects(_a: Record<string, unknown>, _b: Record<string, unknown>): boolean {
  const _aJSON = JSON.stringify(Object.entries(_a).sort())
  const _bJSON = JSON.stringify(Object.entries(_b).sort())
  return _aJSON === _bJSON
}
