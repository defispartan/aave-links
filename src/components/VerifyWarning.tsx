export const VerifyWarning = () => {
    return (
        <div className="riskBox">
            <div className="riskBoxInner">
                <img
                    src="/warning.png"
                    height="25px"
                    width="25px"
                    style={{ margin: '0 10px' }}
                    alt="warning"
                />
                <p className="riskBoxText">
                    Always verify the addresses you are interacting with docs or the{' '} <a href="https://github.com/bgd-labs/aave-address-book" style={{ textDecoration: 'none' }}>Aave address book</a>{' '}or{' '}<a href="https://docs.aave.com/developers/deployed-contracts/deployed-contracts" style={{ textDecoration: 'none' }}>{' '}docs</a>. You can also check out this{' '}<a href="https://github.com/aave/aave-ui/blob/master/VERIFICATION.md" style={{ textDecoration: 'none' }}>guide</a>{' '}for which contracts are called by certain actions
                </p>
            </div>
        </div>
    )
}