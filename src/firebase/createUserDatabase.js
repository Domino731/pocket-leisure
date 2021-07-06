import {db} from "./firebase";

const today = new Date().toLocaleDateString()

//creating new user database in firestore(collection users)
/* @param userName name it will be created with
@param dataId this is an automatically generated id during user
registration to download documents from firestore, it is assigned to the account and to the database
 */
export const createUserDatabase = (username, id) => {
    console.log(id)
    db.collection('user')
        .add({
            user: username,
            dataId: id,
            createdAt: today
        })
        .then(() => {
            createData(username)
        })
}

//creating new doc in firestore(collection users)
/*
 @param name to get id of current user
*/
const createData = (name) => {
    db.collection("user").where("user", "==", `${name}`)
        .onSnapshot(querySnapshot => {
            const id = querySnapshot.docs.map(doc => (doc.id));
            addCategory(id, "movies")
            addCategory(id, "games")
            addCategory(id, "books")
        })
}

//creating first doc
/*
@param id to function know where push first doc.
@param name   of collection, to which you want add new doc.
*/
const addCategory = (id, name) => {
    db.collection("user").doc(`${id[0]}`).collection(`${name}`).add({
        firstDoc: today
    })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}