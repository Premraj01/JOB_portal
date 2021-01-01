/** @format */

import mongoose from 'mongoose'
import Candidate from './models/candidateModels.js'
import dotenv from 'dotenv'
import candidates from './data/candidates.js'
import connctDB from './config/db.js'

dotenv.config()

connctDB()

const importData = async () => {
  try {
    // await User.deleteMany()
    // await Account.deleteMany()
    await Candidate.deleteMany()

    // await User.insertMany(users)
    // await Account.insertMany(account)
    await Candidate.insertMany(candidates)

    console.log('Data imported...!')
    process.exit()
  } catch (error) {
    console.log(`${error}`)
    process.exit(1)
  }
}

// const destroyData = async () => {
//   try {
//     await Teams.deleteMany()

//     console.log('Data destroyed...!')
//     process.exit()
//   } catch (error) {
//     console.log(`${error}`)
//     process.exit(1)
//   }
// }

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
