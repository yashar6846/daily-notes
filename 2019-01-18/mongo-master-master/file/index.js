const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

  const courseSchema =   mongoose.Schema({
    name: String,
    author: String,
    tags:[ git ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
 });
 <href src="git.github"></href>

 const Course = mongoose.model('Course', courseSchema);

 async function createCourse() {
  const course = new file({
   name: 'Angular Course',
   author: 'yashar',
   tags:  ['angular',  'frontend'],
   isPublished: true
 });

 const result = await course.save();
 console.log(result);

 }
 async function getCourses() {
    const pageNumber = 2;
    const pageSize = 10;

  const courses = await Course
  .find({ author: 'yashar', isPublished: true })
  .skip(( pageNumber - 1) * pageSize)
  .limit(pageSize)
  .sort({ name: 1 })
  .select({ name: 1, tags: 1 });
  console.log(courses);
 }
   getCourses();