Use Case 0 - XDI and the Respect Network Use Case
- (needs reference to CISWG Wiki where this is located) 
# Appendix: Reference Consent Receipts
[missing diagram]

## Example 1.Physical Receipt: previous use case and hackathon notes

A sample consent receipt modelled after a cash register receipt, produced as a pdf file for the data subject to download or print.

## Example 2. Personal Data Store Use Case Notes
The following example is based on a technical walkthrough with the Respect Network. Respect Network (RN) Technical Demo:

* Store a Consent Receipt in your RN personal cloud using XDI: http://amazon-respect-consent.herokuapp.com/
* List Consent Receipts in your RN personal cloud: http://open-notice.github.io/respect-network-receipts/

Amazon Respect Use Case: With the Respect Network and Open Notice
(Note: Amazon Respect is a Fictitious organisation used here only as an example)

(http://open-notice.github.io/consent-receipt/amazon-mock/signup.html)

Implementation of consent receipt which is signed & created by a DC and stored in a personal cloud.

To make consent receipt use scalable, CRs needs to be signed and put in a personal data store as part of the Respect Network.

This specification and demo is created to demonstrate a MVCR being implemented without the need for an Open Notice Registry with the Respect Network (Trusted Network) Trust Framework  which natively has the ability to provision receipts to the highest level of compliance.

This walk-through demo is intended to demonstrate how a consent receipt can be stored in a personal cloud from this spec document and demonstrate 'Fast Track' usability.

1. DS goes to amazonrespect.com website
2. Website presents form and asks for consent:
  a. either to sign up initially, or
  b. for additional consent and profile management when already logged in
3. DS agrees (clicks on “i agree” button)
4. DC website initiates creating a receipt for the consent just given.
5. DC checks for reciept data collection and notice extensions and finishes creating the receipt.
6. The receipt is signed by DC.
7. DC website sends an XDI message to DC’s RN cloud to store the signed receipt.
8. DC shows popup window with options (what to do with the receipt).

The signed receipt is embedded in the popup window.

1. email to DS using email address in amazon profile
2. store in users personal cloud
3. capture in browser
4. download receipt as pdf
5. opt out of a receipt.
9. DS clicks on “store receipt in my RN cloud”. (default option)
10. Popup window asks DS: what is your cloud name?
11. DS types cloud name =alice
12. Popup window runs XDI discovery to find DS’ RN cloud
13. Popup window sends an XDI message to DS’ RN cloud to store the signed receipt

The Re-usability of a MVCR can then be made scalable for re-use in aggregate. This is beyond the point of consent for the data subject, with a process in whch the receipt is digitally signed by both parties.
This process also identifies the jurisdiction of the Data Controller and of the Data Subject. This example includes signing of the receipt by the DC. (Note: The digital signing of the  DS (data subject) is currently out of scope of the first draft1.)
MVCR Mock Up for Amazon Respect Use Case

| Field | Description | Example (XDI) |
| ---- | ---- | ---- |
| Data Subject | Name or pseudonym of the Data Subject | Data Subject: Alice [=]!:uuid:1111 |
| Sensitive Personal Data Flag (Y/N) | Flag to categorise the information collected as sensitive or not.  Each jurisdiction has classifications of sensitive personal information (privacy): The generally include health, financial, child protection (>14), youth protection(>19 or >22), educational, religious, or political categorisations.  May trigger additional legal notice and consent requirements | [#receipt]!:uuid:1234<#sensitive>&/&/true |
| Data Controller | Name of the entity issuing the consent receipt. This is the entity accountable by law for the information collected. | Data Controller: Amazon [+]!:uuid:9999 |
| Purpose | The purpose(s) for which the information is being collected. | [#receipt]!:uuid:1234[<#purpose>]<@0>&/&/"We need to process your payment."  [#receipt]!:uuid:1234[<#purpose>]<@1>&/&/"We  need your data to prevent fraud."  [#receipt]!:uuid:1234[<#purpose>]<@2>&/&/"We will advertise to you."
| Privacy Policy | The issuing entity's privacy policy (either inline copy, or reference to URI) | [#receipt]!:uuid:1234<#privacy><#policy>&/&/"copy of privacy policy here" or [#receipt]!:uuid:1234<#privacy><#policy><$uri>&/&/"https://..." |
| Location of Consent | The location of the consent provision. from which the consent receipt originates.(i.e. The web page with the consent button.) | [#receipt]!:uuid:1234<#location><$uri>&/&/"....." |
| Third Party Sharing| Flag whether data is shared with third parties. (Y/N)  May trigger special notice or consent requirements | [#receipt]!:uuid:1234<#third><parties>&/&/true |
| Site Specific Fields | Additional field or fields as necessary to fulfill the notice and other requirements that the Data Controller may need | --  |
