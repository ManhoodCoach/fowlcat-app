use anchor_lang::prelude::*;

declare_id!("72hUAozrL1X8AjcmhswNekfsSegVQSLr4puQ8tNad6wy");

#[program]
pub mod fowlcat_staking {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
