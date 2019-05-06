const bcrypt = require('bcrypt')
const txt = "values";

const hashing = async (text,round =10)=>{
  console.log(round);
  const val = await bcrypt.hash(text,round)
  console.log(val);
  const com  = await bcrypt.compare('values',val)
  console.log(com)
}

hashing(txt,12)
