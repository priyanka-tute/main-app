const { fetchAllCourses, fetchCourse, modifyCourse, addNewCourse, deleteCourse, fetchCourseBySlug } = require("../controllers/course");

const router = require("express").Router();

router.get("/course/all",fetchAllCourses);
router.get("/course",fetchCourse);
router.get("/course/:slug",fetchCourseBySlug)

router.post("/course",addNewCourse);

router.put("/course",modifyCourse);

router.delete("/course",deleteCourse);

module.exports = router;