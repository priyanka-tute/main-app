const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SectionSchema = new Schema({
    section_no:Number,
    section_name:{type:String,required:true},
    section_lectures:[LectureSchema]
})
const LectureSchema = new Schema({
    lecture_no:{type:Number,required:true},
    lecture_name:{type:String, required:true},
    lecture_cloud_link:CloudLinkSchema,
    lecture_file_path: {type:String,required:true}

})
const CourseSchema = new Schema({
 course_name:{type:String,required:true},
 sections:[SectionSchema],
 slug:{type:String, unique:true,required:true}
},{
    timestamps: {
        createdAt: 'addDate',
        updatedAt: 'updatedAt'
    }
  });

const Course = mongoose.model('course',CourseSchema);
module.exports = Course;
