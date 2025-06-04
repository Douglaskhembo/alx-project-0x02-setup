import Header from "@/components/layout/Header";

export default function Home(){
  return(
    <div>
      <Header/>
        <main className="p-4">
          <h2 className="text-2xl font-semibold"> Welcome to Airbnb Booking System</h2>
          <p>The basic system setup</p>
        </main>
    </div>
  );
}