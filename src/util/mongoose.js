module.exports = {
    mutipleMongooseToObject: (mongooses) => mongooses.map(mongose => mongose.toObject()),
    mongooseToObject: (moogoose) => moogoose ? moogoose.toObject() : moogoose,
}