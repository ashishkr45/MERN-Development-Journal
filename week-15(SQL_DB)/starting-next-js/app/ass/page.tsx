import axios from "axios";

async function getTodo() {
  const responce = await axios.get("https://jsonplaceholder.typicode.com/todos")
  return responce.data;
}

export default async function Home() {
  const blog = await getTodo();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 p-3 mt-4 ml-4">
      {blog.map((todo: any) => (
        <CardCompo 
          key={todo.id} 
          title={todo.title} 
          completed={todo.completed} 
        />
      ))}
    </div>
  );
}

interface cardProps {
  title: string,
  completed: boolean
}

function CardCompo({title, completed}: cardProps) {
    return (
    <div className="bg-orange-100 shadow-md rounded-2xl p-4 w-64 hover:shadow-lg transition">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p
        className={`mt-2 text-sm font-medium ${
          completed ? "text-green-600" : "text-red-500"
        }`}
      >
        {completed ? "Completed ✅" : "Pending ⏳"}
      </p>
    </div>
  );
}
