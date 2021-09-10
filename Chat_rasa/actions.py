# This files contains your custom actions which can be used to run
# custom Python code

from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import SlotSet
from datetime import datetime

class action_nombre(Action):

 def name(self) -> Text:
  return "action_nombre"

 def run(self, dispatcher: CollectingDispatcher,
         tracker: Tracker,
         domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
  jugador = tracker.get_slot('nombre')
  print(jugador)
  hora_de_sesion = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

  dispatcher.utter_message(text="Vamos a empezar")
  dispatcher.utter_message(text="Empiezas una nueva sesión en esta fecha: {}".format(hora_de_sesion))

  return[]
