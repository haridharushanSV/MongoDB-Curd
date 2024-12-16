import book from "../models/books.model.js"

//get
export const booksindex = async (req, res) => {
    try{
      const movie =   await book.find()
      res.json(movie)
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }

};


//post
export const bookscreate = async (req, res) => {
    

   const newbook =  new book({
        title: req.body.title,
        author: req.body.author,

       
    })

    try {
        const movie = await newbook.save();
        return res.status(200).json(movie);
    }
    catch (error) {
        res.status(500).send('Server Error');
    }



};

//put
export const booksput = async (req, res) => {


    try{
        const putbook= await book.findByIdAndUpdate(
            {_id: req.params.id},
            {
            title: req.body.title,
            author: req.body.author,
        }
    );
    res.status(200).json(putbook);

      }
      catch (error) {
          res.status(500).send('Server Error');
      }

};


//delete
export const booksdel = async (req, res) => {
   const bookid = req.params.id;


   try {
    const delbook = await book.deleteOne({ _id: bookid});
    res.json("Sucessfully deleted book");

   }
   catch (error) {
       res.status(500).send('Server Error');
   }

};