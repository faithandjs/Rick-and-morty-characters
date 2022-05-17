export interface noteProp {
  id: number;
  createdAt: {
    date: string;
    time: string;
  };
  heading: string;
  content: string;
}
export interface notesArray {
  notes: noteProp[];
}
/*export*/
export interface notePropProp {
  note: noteProp;
}
