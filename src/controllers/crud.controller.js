const post = (model) => async (req, res) => {
  try {
    const item = await model.create(req.body);
    return res.status(201).send(item);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

const getAll = (model) => async (req, res) => {
  try {
    const items = await model.find().lean().exec();
    return res.status(201).send(items);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

const getAllWithTwoPopulate =
  (model, populate1, populate2) => async (req, res) => {
    try {
      const items = await model
        .find(req.params.id)
        .populate(populate1)
        .populate(populate2)
        .lean()
        .exec();
      return res.status(201).send(items);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  };
const getAllWithPopulate = (model, populate1) => async (req, res) => {
  try {
    const items = await model.find().populate(populate1).lean().exec();
    return res.status(201).send(items);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

const updateOne = (model) => async (req, res) => {
  try {
    const item = await model
      .findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      .lean()
      .exec();
    return res.status(201).send(item);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

const GetTopper = (model, populate1, populate2) => async (req, res) => {
  try {
    const item = await model
      .find()
      .sort({ student_marks: -1 })
      .skip(1)
      .limit(1)
      .populate(populate1)
      .populate(populate2)
      .lean()
      .exec();
    return res.status(201).send(item);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

const deleteOne = (model) => async (req, res) => {
  try {
    const item = await model.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send(item);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

module.exports = {
  post,
  getAll,
  getAllWithPopulate,
  getAllWithTwoPopulate,
  GetTopper,
  updateOne,
  deleteOne,
};
