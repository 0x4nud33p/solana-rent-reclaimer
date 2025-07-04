use anchor_lang::prelude::*;

declare_id!("iPV2qjFsBjP7dzD4uGaGG6eyatLYboS42y2o8zFAHy5");

#[program]
pub mod solmate {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
