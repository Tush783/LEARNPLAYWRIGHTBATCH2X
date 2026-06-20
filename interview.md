# JavaScript Interview Questions

---

## Q: Why do we use `const` for objects?

**Short answer:** `const` prevents you from replacing the whole object — but you can still change what's inside it.

```js
const box = { color: "red" };

box.color = "blue";      // ✅ changing a property inside — allowed
box = { color: "green" }; // ❌ replacing the whole object — not allowed
```

**Think of it like a lunchbox with your name on it** — you can swap the food inside, but you can't throw away the box and get a new one.

**Key point:** `const` protects the reference (the box), not the contents (the food).

> If you want to lock the contents too, use `Object.freeze(obj)`.

---
