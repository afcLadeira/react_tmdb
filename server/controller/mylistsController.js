const List = require("../models/lists");

const getAllListsFromUser = async (req, res) => {
  try {
  

    const { userId } = req.params;

    const userLists = await List.find({ userId: userId }).exec();

    res.status(200).json(userLists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createList = async (req, res) => {
  const list = req.body;
 

  list.movies = [];

  try {
    // const result = await List.create({
    //     name: "test",
    //     description: "teste description",
    //     userId : 25,
    //     movies: []
    // });
    const result = await List.create(list);

    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
const updateList = async (req, res) => {
  const { userId, id } = req.params;
  const updatedList = req.body;

  let list = await List.findOne({ _id: id }).exec();
  if (!list) {
    return res
      .status(204)
      .json({ message: `No list matches ID ${req.body.id}.` });
  }

  list.name = updatedList.name;
  list.description = updatedList.description;
  list.movies = updatedList.movies;

  const result = await list.save();
  res.json(result);
};

const updateListMovies = async (req, res) => {
  const { id } = req.params;
  const movie = req.body;

  let list = await List.findOne({ _id: id }).exec();

  if (!list) {
    return res.status(204).json({ message: `No list matches ID ${id}.` });
  }

  list.movies = [...list.movies, movie];

  const result = await list.save();
  res.json(result);
};

const deleteList = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: "List ID required." });

  const listFromDB = await List.findOne({ _id: id }).exec();

  if (!listFromDB) {
    return res.status(204).json({ message: `No list matches ID ${id}.` });
  }
  const result = await listFromDB.deleteOne();
  res.json(result);
};

module.exports = {
  getAllListsFromUser,
  createList,
  updateList,
  deleteList,
  updateListMovies,
};
