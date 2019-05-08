const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const txt = "values";
const signing = 'singme'

const hashing = async (text,round =8)=>{
  console.log(round);
  const val = await bcrypt.hash(text,round)
  console.log('Hasing Value: ',val);
  const com  = await bcrypt.compare('values',val)
  console.log(com)
}
const signMe = (signingChar,signingText)=>{
  const signed = jwt.sign({name:'Ramesh',age:32},signingText, {noTimestamp:true,expiresIn:1})
  console.log('Signed : '+signed)
  const verify = jwt.verify(signed,signing)
  console.log('Signature Verified: '+JSON.stringify(verify))
}

var a = {r:32,
        p:45}
    a.c=45;
    console.log(JSON.stringify(a))
hashing(txt,12)
signMe(txt,signing)
