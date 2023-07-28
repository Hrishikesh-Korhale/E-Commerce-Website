import User from "../model/user-schema.js";

const userSignup = async (request, response) => {
  try {
    const exists = await User.findOne({ username: request.body.username });
    if (exists) {
      return response.status(401).json({ message: "Username already exits" });
    }
    console.log(exists);
    const user = request.body;
    const newUser = new User(user);
    await newUser.save();

    response.status(200).json({ message: user });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export default userSignup;
