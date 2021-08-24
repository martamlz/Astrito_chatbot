# This files contains your custom actions which can be used to run
# custom Python code

from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import SlotSet

class action_nombre(Action):

 def name(self) -> Text:
  return "action_nombre"

 def run(self, dispatcher: CollectingDispatcher,
         tracker: Tracker,
         domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
  jugador = tracker.get_slot('nombre')
  print(jugador)

  dispatcher.utter_message(text="Hello {}".format(jugador))

  return[]
