export class UserVerification {
    isVerified: boolean;
    verifyCode?: string;
    verifyCodeExpiry?: Date;
    resetToken?: string;
    resetTokenExpiry?: Date;
  
    constructor(
      isVerified: boolean = false,
      verifyCode?: string,
      verifyCodeExpiry?: Date,
      resetToken?: string,
      resetTokenExpiry?: Date
    ) {
      this.isVerified = isVerified;
      this.verifyCode = verifyCode;
      this.verifyCodeExpiry = verifyCodeExpiry;
      this.resetToken = resetToken;
      this.resetTokenExpiry = resetTokenExpiry;
    }
  }
  