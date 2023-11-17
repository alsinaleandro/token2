import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";

actor {

  var owner : Principal = Principal.fromText("5eyp2-vrol2-2d5j5-d6pmj-wkotv-lyelo-737ho-d63nn-dqzr2-rfgmg-7qe");
  var totalSupply : Nat = 1000000000;

  var symbol : Text = "DALS";

  var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);

  balances.put(owner, totalSupply);

  public query func balanceOf(who: Principal) : async Nat
  {
    
    let balance : Nat = switch (balances.get(who))
    {
      case null 0;
      case (?result) result;
    };

    return balance;

  };

  public query func getSymbol() : async Text {
    return symbol;
  };

};
