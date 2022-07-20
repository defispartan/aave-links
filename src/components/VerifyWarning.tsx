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
                    Always verify that contract addresses are correct before submitting transactions. You can find official addresses in the {' '}<a href="https://docs.aave.com/developers/deployed-contracts/deployed-contracts" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">Aave Docs</a>{' '} or {' '}<a href="https://github.com/bgd-labs/aave-address-book" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">address book library</a>. This{' '}<a href="https://github.com/aave/aave-ui/blob/master/VERIFICATION.md" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">guide</a>{' '} explains the contracts called by each protocol method.
                </p>
            </div>
        </div>
    )
}