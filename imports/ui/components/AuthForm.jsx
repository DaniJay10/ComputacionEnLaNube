import { useState } from "react";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <main>
      <form onSubmit={onSubmit}>
        <div>
          <label>Email</label> <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label> Password</label> <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button>Entrar</button>
        </div>
      </form>
    </main>
  );
}
