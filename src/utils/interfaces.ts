export interface Isuscriber {
    name: string,
    email: string,
    budget: number,
    message?: string
}

export interface RollProps {
    text: string;
    baseVelocity: number;
  }

export interface Ichevron {
    type:"right"|"left",
    hiddenSlide:String|"right"|"left"
  }

export interface IloadingModalState{
  status:number | null,
  isLoading:boolean
}
export interface IsimpleRes {
  message:string,
  status:number
}
