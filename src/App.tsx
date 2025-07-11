import CreateLeadForm, { type LeadFormValues } from "./Component/CreateLeadForm";
import CreateTicketForm from "./Component/CreateTicketForm";
import Viewlead from "./Component/Viewlead";
import Modalcall from "./Component/Modalcall";
import Createteammember from "./Component/Createteammember";
import Createteam from "./Component/Createteam";


export default function LeadPage() {
  const handleCreate = (values: LeadFormValues) => {
    console.log("Lead Submitted:", values);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <CreateLeadForm onSubmit={handleCreate} open={false} />
         <CreateTicketForm onSubmit={handleCreate} onCancel={function (): void {
        return;
      } } open={false}/>
      <Viewlead open={false} onCancel={function (): void {
        return;
      } } onOk={function (_formData?: LeadFormValues): void {
        return;
      } }/>
      <Createteammember open={false} onCancel={function (): void {
        return;
      } } onOk={function (): void {
        return;
      } }/>

      <Createteam open={false} onCancel={function (): void {
        return;
      } } onOk={function (): void {
        return;
      } }/>
      <Modalcall />
    </div>
  );
}
