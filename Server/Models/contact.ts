import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ContactSchema = new Schema
({
    //FullName: String,
    FirstName: String,
    LastName: String,
    EmailAddress: String,
    ContactNumber: String,
    Message: String
},
{
    collection: "contacts"
});

const Model = mongoose.model("Contact", ContactSchema);
export default Model;

