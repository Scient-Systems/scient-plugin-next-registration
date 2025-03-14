# **Scient Plugin Next Registration - Authentication Library**  

**Scient Plugin Next Registration** is a flexible authentication library designed to simplify user registration, verification, password management, and authentication in Node.js applications. It provides an easy-to-use API to handle common authentication features.  

---

## **📌 Features**  
✅ User Registration  
✅ Email Verification with OTP  
✅ Secure Password Hashing    
✅ Forgot & Reset Password  

---

## **📖 Installation**  
To install **Scient Plugin Next Registration**, run the following command:  
```sh
npm install https://github.com/Scient-Systems/scient-plugin-next-registration.git
```

or with Yarn:
```sh
yarn add https://github.com/Scient-Systems/scient-plugin-next-registration.git
```



### **2. Set Up Environment Variables**  
Create a `.env.local` file in your Next.js project and define your database settings:

```ini
# Choose database type: "mongo" or "supabase"
DATA_STORE=mongo 

# MongoDB Config
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority

# Supabase Config
SUPABASE_URL=https://your-supabase-url
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

---

## 🔧 **Usage**  

### **1. Import the Factory**
```ts
import { UserRepositoryFactory } from "scient-plugin-next-registration";

const userRepo = UserRepositoryFactory.create();
```

### **2. Register a User**
```ts
const response = await userRepo.registerUser(
  "John",
  "Doe",
  "johndoe",
  "johndoe@example.com",
  "securepassword123"
);

console.log(response);
```

### **3. Verify a User**
```ts
const response = await userRepo.verifyUser("johndoe", "123456"); // Use the code sent to the user
console.log(response);
```

### **4. Forgot Password**
```ts
const response = await userRepo.forgotPassword("johndoe@example.com", "https://yourwebsite.com");
console.log(response);
```

### **5. Reset Password**
```ts
const response = await userRepo.resetPassword("reset-token-from-email", "newsecurepassword");
console.log(response);
```

### **6. Update User Fields**
```ts
const response = await userRepo.updateUserFields("userId", { age: 25, country: "USA" });
console.log(response);
```

---

## ⚙️ **How It Works**
- The package detects the `DB_TYPE` from environment variables.
- If `DATA_STORE=mongo`, it uses **MongoDB** (`mongoose`).
- If `DATA_STORE=supabase`, it uses **Supabase** (`@supabase/supabase-js`).
- User data and verification codes are stored in the appropriate database.
- Passwords are hashed using **bcryptjs** before saving.

---


This **README.md** gives clear instructions for installing, configuring, and using the package. Let me know if you need any modifications! 🚀
## **💡 Contributing**
Feel free to submit issues and pull requests.  

---

