export default async function FetchBit() {
  const bicoinhtml = document.querySelector('.BitCoin span');
  const request = await fetch('https://blockchain.info/ticker');
  const response = await request.json();
  const BitCoin = +response.BRL.sell;
  bicoinhtml.innerText = `${(1000 / BitCoin).toFixed(3)}R$`;
}
