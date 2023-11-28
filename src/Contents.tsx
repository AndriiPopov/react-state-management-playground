import { useNavigate } from "react-router-dom";
import { routes } from "./routes";

const Contents = () => {
  const navigate = useNavigate();
  return (
    <div>
      {routes.map((route) => (
        <div
          key={route.path}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "10px",
          }}
        >
          <button onClick={() => navigate(route.path)}>{route.name}</button>
        </div>
      ))}
    </div>
  );
};

export { Contents };
