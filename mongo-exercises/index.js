const mongoose =  require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...',err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String  ],
    date: { type: Date, default: Date.now },
    price: Number,
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
    //Comparison query
    const courses = await Course
        .find({ isPublished:true})
        .or([{price:{ $gte: 15} },{ name: /.*by.*/ }])
        .sort({ price: -1})
        .select({name:1, author:1,price: 1});
    console.log(courses);
}

getCourses();