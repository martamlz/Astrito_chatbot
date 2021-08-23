## story1
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* despedirse
 - utter_adios

## Camino eligiendo sol + pregunta correcta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sol
 - utter_def_sol
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sol
* mercurio
 - utter_pregunta_correcta
* despedirse
 - utter_adios

## Camino eligiendo sol + pregunta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sol
 - utter_def_sol
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sol
* venus
 - utter_pregunta_incorrecta
* despedirse
 - utter_adios

## Camino eligiendo sol no pregunta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sol
 - utter_def_sol
 - utter_pregunta_2
* negar
 - utter_adios

## Camino eligiendo luna + pregunta correcta + subtema distancia + respuesta correcta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_luna
 - utter_def_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_luna
* negar
 - utter_pregunta_correcta
 - utter_quieres_subtema_luna
* distancia_luna
 - utter_def_distancia_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_distancia_luna
* mas_cerca
 - utter_pregunta_correcta
* despedirse
 - utter_adios

## Camino eligiendo luna + pregunta correcta + subtema distancia + respuesta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_luna
 - utter_def_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_luna
* negar
 - utter_pregunta_correcta
 - utter_quieres_subtema_luna
* distancia_luna
 - utter_def_distancia_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_distancia_luna
* mas_brillante
 - utter_pregunta_incorrecta
* despedirse
 - utter_adios

## Camino eligiendo luna + pregunta correcta + subtema distancia + no pregunta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_luna
 - utter_def_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_luna
* negar
 - utter_pregunta_correcta
 - utter_quieres_subtema_luna
* distancia_luna
 - utter_def_distancia_luna
 - utter_pregunta_2
* negar
 - utter_adios

## Camino eligiendo luna + pregunta correcta + subtema fases + respuesta correcta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_luna
 - utter_def_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_luna
* negar
 - utter_pregunta_correcta
 - utter_quieres_subtema_luna
* fases_luna
 - utter_def_fases_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_fases_luna
* calendario_luna
 - utter_pregunta_correcta
* despedirse
 - utter_adios

## Camino eligiendo luna + pregunta correcta + subtema fases + respuesta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_luna
 - utter_def_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_luna
* negar
 - utter_pregunta_correcta
 - utter_quieres_subtema_luna
* fases_luna
 - utter_def_fases_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_fases_luna
* despertador_luna
 - utter_pregunta_incorrecta
* despedirse
 - utter_adios

## Camino eligiendo luna + pregunta correcta + subtema fases + no pregunta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_luna
 - utter_def_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_luna
* negar
 - utter_pregunta_correcta
 - utter_quieres_subtema_luna
* fases_luna
 - utter_def_fases_luna
 - utter_pregunta_2
* negar
 - utter_adios

## Camino eligiendo luna + pregunta correcta + subtema mareas + respuesta correcta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_luna
 - utter_def_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_luna
* negar
 - utter_pregunta_correcta
 - utter_quieres_subtema_luna
* mareas_luna
 - utter_def_mareas_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_mareas_luna
* mar_pequeño
 - utter_pregunta_correcta
* despedirse
 - utter_adios

## Camino eligiendo luna + pregunta correcta + subtema mareas + respuesta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_luna
 - utter_def_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_luna
* negar
 - utter_pregunta_correcta
 - utter_quieres_subtema_luna
* mareas_luna
 - utter_def_mareas_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_mareas_luna
* mar_grande
 - utter_pregunta_incorrecta
* despedirse
 - utter_adios

## Camino eligiendo luna + pregunta correcta + subtema fases + no pregunta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_luna
 - utter_def_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_luna
* negar
 - utter_pregunta_correcta
 - utter_quieres_subtema_luna
* mareas_luna
 - utter_def_mareas_luna
 - utter_pregunta_2
* negar
 - utter_adios

## Camino eligiendo luna + pregunta correcta + subtema geografia + respuesta correcta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_luna
 - utter_def_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_luna
* negar
 - utter_pregunta_correcta
 - utter_quieres_subtema_luna
* geografia_luna
 - utter_def_geografia_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_geografia_luna
* afirmar
 - utter_pregunta_correcta
* despedirse
 - utter_adios

## Camino eligiendo luna + pregunta correcta + subtema geografia + respuesta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_luna
 - utter_def_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_luna
* negar
 - utter_pregunta_correcta
 - utter_quieres_subtema_luna
* geografia_luna
 - utter_def_geografia_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_geografia_luna
* negar
 - utter_pregunta_incorrecta
* despedirse
 - utter_adios

## Camino eligiendo luna + pregunta correcta + subtema geografia + no pregunta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_luna
 - utter_def_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_luna
* negar
 - utter_pregunta_correcta
 - utter_quieres_subtema_luna
* geografia_luna
 - utter_def_geografia_luna
 - utter_pregunta_2
* negar
 - utter_adios


## Camino eligiendo luna + pregunta correcta + no subtema 
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_luna
 - utter_def_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_luna
* negar
 - utter_pregunta_correcta
 - utter_quieres_subtema_luna
* negar
 - utter_adios

## Camino eligiendo luna + pregunta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_luna
 - utter_def_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_luna
* afirmar
 - utter_pregunta_incorrecta
* despedirse
 - utter_adios

## Camino eligiendo luna no pregunta 
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_luna
 - utter_def_luna
 - utter_pregunta_2
* negar
 - utter_adios
 
## Camino eligiendo sistema solar + pregunta correcta + subtema mercurio + respuesta correcta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* mercurio
 - utter_def_mercurio_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_mercurio_sistema_solar
* no_atm
 - utter_pregunta_correcta
 - utter_adios

## Camino eligiendo sistema solar + pregunta correcta + subtema mercurio + respuesta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* mercurio
 - utter_def_mercurio_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_mercurio_sistema_solar
* pequeño
 - utter_pregunta_incorrecta
 - utter_adios

## Camino eligiendo sistema solar + pregunta correcta + subtema mercurio + no pregunta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* mercurio
 - utter_def_mercurio_sistema_solar
 - utter_pregunta_2
* negar
 - utter_adios

## Camino eligiendo sistema solar + pregunta correcta + subtema venus 
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* venus
 - utter_def_venus_sistema_solar
 - utter_adios

## Camino eligiendo sistema solar + pregunta correcta + subtema tierra + respuesta correcta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* tierra
 - utter_def_tierra_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_tierra_sistema_solar
* febrero_dia
 - utter_pregunta_correcta
 - utter_adios

## Camino eligiendo sistema solar + pregunta correcta + subtema tierra + respuesta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* tierra
 - utter_def_tierra_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_tierra_sistema_solar
* julio_dia
 - utter_pregunta_incorrecta
 - utter_adios

## Camino eligiendo sistema solar + pregunta correcta + subtema tierra + no pregunta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* tierra
 - utter_def_tierra_sistema_solar
 - utter_pregunta_2
* negar
 - utter_adios

## Camino eligiendo sistema solar + pregunta correcta + subtema marte + respuesta correcta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* marte
 - utter_def_marte_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_marte_sistema_solar
* afirmar
 - utter_pregunta_correcta
 - utter_adios

## Camino eligiendo sistema solar + pregunta correcta + subtema marte + respuesta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* marte
 - utter_def_marte_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_marte_sistema_solar
* negar
 - utter_pregunta_incorrecta
 - utter_adios

## Camino eligiendo sistema solar + pregunta correcta + subtema marte + no pregunta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* marte
 - utter_def_marte_sistema_solar
 - utter_pregunta_2
* negar
 - utter_adios

## Camino eligiendo sistema solar + pregunta correcta + subtema jupiter + respuesta correcta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* jupiter
 - utter_def_jupiter_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_jupiter_sistema_solar
* quinto
 - utter_pregunta_correcta
 - utter_adios

## Camino eligiendo sistema solar + pregunta correcta + subtema jupiter + respuesta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* jupiter
 - utter_def_jupiter_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_jupiter_sistema_solar
* sexto
 - utter_pregunta_incorrecta
 - utter_adios

## Camino eligiendo sistema solar + pregunta correcta + subtema jupiter + no pregunta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* jupiter
 - utter_def_jupiter_sistema_solar
 - utter_pregunta_2
* negar
 - utter_adios

## Camino eligiendo sistema solar + pregunta correcta + subtema saturno + respuesta correcta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* saturno
 - utter_def_saturno_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_saturno_sistema_solar
* negar
 - utter_pregunta_correcta
 - utter_adios

## Camino eligiendo sistema solar + pregunta correcta + subtema saturno + respuesta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* saturno
 - utter_def_saturno_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_saturno_sistema_solar
* afirmar
 - utter_pregunta_incorrecta
 - utter_adios

## Camino eligiendo sistema solar + pregunta correcta + subtema saturno + no pregunta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* saturno
 - utter_def_saturno_sistema_solar
 - utter_pregunta_2
* negar
 - utter_adios

## Camino eligiendo sistema solar + pregunta correcta + subtema urano + respuesta correcta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* urano
 - utter_def_urano_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_urano_sistema_solar
* negar
 - utter_pregunta_correcta
 - utter_adios

## Camino eligiendo sistema solar + pregunta correcta + subtema urano + respuesta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* urano
 - utter_def_urano_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_urano_sistema_solar
* afirmar
 - utter_pregunta_incorrecta
 - utter_adios

## Camino eligiendo sistema solar + pregunta correcta + subtema urano + no pregunta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* urano
 - utter_def_urano_sistema_solar
 - utter_pregunta_2
* negar
 - utter_adios

## Camino eligiendo sistema solar + pregunta correcta + subtema neptuno + respuesta correcta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* neptuno
 - utter_def_neptuno_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_neptuno_sistema_solar
* negar
 - utter_pregunta_correcta
 - utter_adios

## Camino eligiendo sistema solar + pregunta correcta + subtema neptuno + respuesta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* neptuno
 - utter_def_neptuno_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_neptuno_sistema_solar
* afirmar
 - utter_pregunta_incorrecta
 - utter_adios

## Camino eligiendo sistema solar + pregunta correcta + subtema neptuno + no pregunta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* neptuno
 - utter_def_neptuno_sistema_solar
 - utter_pregunta_2
* negar
 - utter_adios

## Camino eligiendo sistema solar + pregunta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
- utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta
 - utter_pregunta_incorrecta
* despedirse
 - utter_adios
 
## Camino eligiendo sistema solar no pregunta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
- utter_pregunta_2
* negar
 - utter_adios

## Camino eligiendo constelaciones + pregunta correcta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_constelaciones
 - utter_def_constelaciones
 - utter_pregunta_2
* afirmar
 - utter_pregunta_constelacion
* negar
 - utter_pregunta_correcta
* despedirse
 - utter_adios

## Camino eligiendo constelaciones + pregunta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_constelaciones
 - utter_def_constelaciones
 - utter_pregunta_2
* afirmar
 - utter_pregunta_constelacion
* afirmar
 - utter_pregunta_incorrecta
* despedirse
 - utter_adios

## Camino eligiendo constelaciones no pregunta 
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_constelaciones
 - utter_def_constelaciones
 - utter_pregunta_2
* negar
 - utter_adios

## Camino eligiendo asteroides + pregunta correcta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_asteroides
 - utter_def_asteroides
 - utter_pregunta_2
* afirmar
 - utter_pregunta_asteroide
* lluvia_de_estrellas
 - utter_pregunta_correcta
* despedirse
 - utter_adios

## Camino eligiendo asteroides + pregunta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_asteroides
 - utter_def_asteroides
 - utter_pregunta_2
* afirmar
 - utter_pregunta_asteroide
* noche_estrellada
 - utter_pregunta_incorrecta
* despedirse
 - utter_adios

## Camino eligiendo asteroides no pregunta 
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_asteroides
 - utter_def_asteroides
 - utter_pregunta_2
* negar
 - utter_adios

## Camino eligiendo planeta + respuesta correcta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_planeta
 - utter_def_planeta
 - utter_pregunta_2
* afirmar
 - utter_pregunta_planeta
* planetas_alrededor_sol
 - utter_pregunta_correcta
* despedirse
 - utter_adios

## Camino eligiendo planeta + respuesta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_planeta
 - utter_def_planeta
 - utter_pregunta_2
* afirmar
 - utter_pregunta_planeta
* sol_alrededor_planetas
 - utter_pregunta_incorrecta
* despedirse
 - utter_adios

## Camino eligiendo planeta no pregunta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_planeta
 - utter_def_planeta
 - utter_pregunta_2
* negar
 - utter_adios
 
## Camino eligiendo satélites + respuesta correcta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_satelite
 - utter_def_satelite
 - utter_pregunta_2
* afirmar
 - utter_pregunta_satelite
* negar
 - utter_pregunta_correcta
* despedirse
 - utter_adios
 
## Camino eligiendo satélites + respuesta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_satelite
 - utter_def_satelite
 - utter_pregunta_2
* afirmar
 - utter_pregunta_satelite
* afirmar
 - utter_pregunta_incorrecta
* despedirse
 - utter_adios

## Camino eligiendo satélites no pregunta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_satelite
 - utter_def_satelite
 - utter_pregunta_2
* negar
 - utter_adios

## Camino eligiendo Vía Láctea + respuesta correcta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_via_lactea
 - utter_def_via_lactea
 - utter_pregunta_2
* afirmar
 - utter_pregunta_viaLactea
* afirmar
 - utter_pregunta_correcta
* despedirse
 - utter_adios
 
## Camino eligiendo Vía Láctea + respuesta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_via_lactea
 - utter_def_via_lactea
 - utter_pregunta_2
* afirmar
 - utter_pregunta_viaLactea
* negar
 - utter_pregunta_incorrecta
* despedirse
 - utter_adios
 
## Camino eligiendo Vía Láctea no pregunta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_via_lactea
 - utter_def_via_lactea
 - utter_pregunta_2
* negar
 - utter_adios

## Camino eligiendo eclipses + respuesta correcta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_eclipse
 - utter_def_eclipse
 - utter_pregunta_2
* afirmar
 - utter_pregunta_eclipse
* negar
 - utter_pregunta_correcta
* despedirse
 - utter_adios
 
## Camino eligiendo eclipses + respuesta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_eclipse
 - utter_def_eclipse
 - utter_pregunta_2
* afirmar
 - utter_pregunta_eclipse
* afirmar
 - utter_pregunta_incorrecta
* despedirse
 - utter_adios

## Camino eligiendo eclipses no pregunta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_eclipse
 - utter_def_eclipse
 - utter_pregunta_2
* negar
 - utter_adios

## Camino eligiendo meteoritos + respuesta correcta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_meteorito
 - utter_def_meteorito
 - utter_pregunta_2
* afirmar
 - utter_pregunta_meteorito
* estrella_fugaz
 - utter_pregunta_correcta
* despedirse
 - utter_adios

## Camino eligiendo meteoritos + respuesta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_meteorito
 - utter_def_meteorito
 - utter_pregunta_2
* afirmar
 - utter_pregunta_meteorito
* tema_cometa
 - utter_pregunta_incorrecta
* despedirse
 - utter_adios

## Camino eligiendo meteoritos no pregunta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_meteorito
 - utter_def_meteorito
 - utter_pregunta_2
* negar
 - utter_adios

## Camino eligiendo nebulosas + respuesta correcta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_nebulosa
 - utter_def_nebulosa
 - utter_pregunta_2
* afirmar
 - utter_pregunta_nebulosa
* negar
 - utter_pregunta_correcta
* despedirse
 - utter_adios

## Camino eligiendo nebulosas + respuesta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_nebulosa
 - utter_def_nebulosa
 - utter_pregunta_2
* afirmar
 - utter_pregunta_nebulosa
* afirmar
 - utter_pregunta_incorrecta
* despedirse
 - utter_adios

## Camino eligiendo nebulosas no pregunta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_nebulosa
 - utter_def_nebulosa
 - utter_pregunta_2
* negar
 - utter_adios

## Camino eligiendo estrellas + respuesta correcta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_estrellas
 - utter_def_estrella
 - utter_pregunta_2
* afirmar
 - utter_pregunta_estrella
* fusion
 - utter_pregunta_correcta
* despedirse
 - utter_adios

## Camino eligiendo estrellas + respuesta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_estrellas
 - utter_def_estrella
 - utter_pregunta_2
* afirmar
 - utter_pregunta_estrella
* reaccion
 - utter_pregunta_incorrecta
* despedirse
 - utter_adios

## Camino eligiendo estrellas no pregunta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_estrellas
 - utter_def_estrella
 - utter_pregunta_2
* negar
 - utter_adios

## Camino eligiendo cometas + respuesta correcta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_cometa
 - utter_def_cometa
 - utter_pregunta_2
* afirmar
 - utter_pregunta_cometa
* punto_cercano
 - utter_pregunta_correcta
* despedirse
 - utter_adios

## Camino eligiendo cometas + respuesta incorrecta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_cometa
 - utter_def_cometa
 - utter_pregunta_2
* afirmar
 - utter_pregunta_cometa
* punto_alejado
 - utter_pregunta_incorrecta
* despedirse
 - utter_adios

## Camino eligiendo cometas no pregunta
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_cometa
 - utter_def_cometa
 - utter_pregunta_2
* negar
 - utter_adios

## Camino sin querer subtema del sistema solar
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_sistema_solar
 - utter_def_sistema_solar
 - utter_pregunta_2
* afirmar
 - utter_pregunta_sistema_solar
* planeta_enano
 - utter_pregunta_correcta
 - utter_quieres_subtema_sistema_solar
* negar
 - utter_adios

## Camino sin querer subtema de la luna
* saludar
 - utter_saludar
* mi_nombre
 - action_nombre
 - utter_pregunta_1
* tema_luna
 - utter_def_luna
 - utter_pregunta_2
* afirmar
 - utter_pregunta_luna
* negar
 - utter_pregunta_correcta
 - utter_quieres_subtema_luna
* negar
 - utter_adios

## Despedirse
* despedirse
 - utter_adios

