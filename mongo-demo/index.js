const mongoose =  require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...',err));


const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        minlength: 3,
        maxlength:255,
       // match: /pattern/
    },
    category: {
        type: String,
        required: true,
        enum: ['web','mobile','network']
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            validator: function(v){
                // Do some async work
                return v && v.length > 0;

            },
            message: 'A validator should have at least one tag.'
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function () {
            return this.isPublished;
        }
    }
});

// Classes, Objects
// Course, nodeCourse
const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Angular Course',
        category: '-',
        author: 'Mosh',
        tags: null,
        isPublished: true,
        price: 15
    });
    try{
       //await course.validate();
        const result = await course.save();
        console.log(result);
    }catch (e) {
        for(field in e.errors){
            console.log(e.errors[field].message);
        }
    }

}

async function updateCourse(id) {
   /* // Approach: QUery first
    const course = await Course.findById(id);
    if(!course){ return;}
    // findById()
    // Modify its properties
    course.isPublished = true;
    course.author = 'Another Author';

    //course.set({
    //   isPublished: true,
    //   author: 'Another author'
    //});
    // save()
    const result = await course.save();
    console.log(result);
    */

    // Approach: Update first
    const result = await Course.updateOne({ _id: id },{
        $set: {
            author: 'Mosh',
            isPublished: false
        }
    });
    console.log(result);


    // Update directly
    // Optionally: get the updated document
}


async function removeCourse(id) {
    /* // Approach: QUery first
     const course = await Course.findById(id);
     if(!course){ return;}
     // findById()
     // Modify its properties
     course.isPublished = true;
     course.author = 'Another Author';

     //course.set({
     //   isPublished: true,
     //   author: 'Another author'
     //});
     // save()
     const result = await course.save();
     console.log(result);
     */

   const result = await Course.deleteOne({ _id: id });
   console.log(result);
}

//removeCourse('5f63d9b01add333b735be093');
createCourse();

async function getCourses() {
    //Comparison query
    // eq (equal)
    // ne (not equal)
    // gt (greater than)
    // gte (greater than or equal to)
    // lt (less than)
    // lte (less than or equal to)
    // in
    // nin (not in)

    //Logical query
    //or
    //and

    //Regular Expression
    const pageNumber = 1;
    const pageSize = 10;
    // /api/courses?pageNumber=2&pageSize=10
    const courses = await Course
        // .findOne({ author: 'Mosh',isPublished: true })
        // .find({ price: { $gte: 10 , $lte: 20 } })
        // .find({price:  { $in: [10 ,15, 20] }})
        //.or([{author: 'Mosh'},{isPublished: true}])
        //.and([{author: 'Mosh'},{isPublished: true}])

        // Starts with Mosh
        // ^ string
        .find({ author: /^Mosh/ }) // starts with Mosh
        // Ends with Hamedani
        //.find({ author: /Hamedani$/i}) // ends with Hamedani and i is for case insensitive

        // Contains Mosh
        //.find({ author: /.*Mosh.*/i }) // o or more character
        //Pagination use skip
        .skip((pageNumber - 1) * pageSize )
        .limit(pageSize)
        .sort({ name: 1})
        .count(); //count total
        //.select({name:1, tags:1});
    console.log(courses);
}

//getCourses();