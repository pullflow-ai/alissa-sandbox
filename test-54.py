// A standalone TypeScript file showcasing random functionality

// Function to generate a random number between two values
const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Function to format a number with commas as thousands separators
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// Function to generate an array of random numbers
const generateRandomArray = (length: number, min: number, max: number): number[] => {
  return Array.from({ length }, () => getRandomNumber(min, max))
}

// Function to display the current timestamp
const getCurrentTimestamp = (): string => {
  return new Date().toLocaleString()
}

// Main execution
const main = () => {
  console.log('Random Script Execution\n')

  const randomNumbers = generateRandomArray(5, 1, 1000)
  console.log('Generated Random Numbers:', randomNumbers.map(formatNumber).join(', '))

  const largeRandomNumber = getRandomNumber(1000000, 1000000000)
  console.log('Large Random Number:', formatNumber(largeRandomNumber))

  console.log('Current Timestamp:', getCurrentTimestamp())
}

main()
