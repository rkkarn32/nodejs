function thismethod(){
  console.log('this method called')
}
const event  = {
  title: 'Birthday Party',
  guestsList : ['Ramesh','Deepesh','Family'],
  printList(){
    console.log('Guest list for event '+this.title)
    this.guestsList.forEach((name,i,arr)=>console.log('Guest',i+1,name, 'in event: '+this.title))
    // this.guestsList.forEach(name=>console.log('Guest',name, 'in event: '+this.title))
  }
}

event.printList();
