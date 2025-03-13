export class User {
    userId: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    role: string;
    isVerified: boolean;
    verifyCode?: string;
    verifyCodeExpiry?: Date;
    resetToken?: string;
    resetTokenExpiry?: Date;
  
    constructor(
      userId: string,
      firstName: string,
      lastName: string,
      userName: string,
      email: string,
      password: string,
      role: string,
      isVerified: boolean = false,
      verifyCode?: string,
      verifyCodeExpiry?: Date,
      resetToken?: string,
      resetTokenExpiry?: Date
    ) {
      this.userId = userId;
      this.firstName = firstName;
      this.lastName = lastName;
      this.userName = userName;
      this.email = email;
      this.password = password;
      this.role = role;
      this.isVerified = isVerified;
      this.verifyCode = verifyCode;
      this.verifyCodeExpiry = verifyCodeExpiry;
      this.resetToken = resetToken;
      this.resetTokenExpiry = resetTokenExpiry;
    }
  }
  