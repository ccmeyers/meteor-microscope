// check that the userId specifeid owns the document
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}