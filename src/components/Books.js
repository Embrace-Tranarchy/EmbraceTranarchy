import React from 'react';
import './Books.css';
import BookItem from './BookItem';

function Books() {
  return (
    <div className='books'>
      <h1>Check out our growing collection!</h1>
      <div className='books__container'>
        <div className='books__wrapper'>
          <ul className='books__items'>
            <BookItem
              src='images/books/brazen.jpeg'
              title='Brazen'
              desc='An important guide written in plain language to safer sex as a trans woman, including sex and relations.'
              genre='Nonfiction / Self-Help'
              path='https://www.cognitoforms.com/EmbraceTranarchy/CheckOutRequest'
            />
            <BookItem
              src='images/books/aPlaceCalledNoHomeland.jpg'
              title='A Place Called No Homeland'
              author='Kai Cheng Thom'
              desc='A collection of poems that celebrates the bodies of the marginalized and creates new maps of gender, race, sexuality, and violence. '
              genre='Nonfiction / Poetry'
              path='https://www.cognitoforms.com/EmbraceTranarchy/CheckOutRequest'
            />
            <BookItem
              src='images/books/iHopeWeChooseLove.jpg'
              title="I Hope We Choose Love: A Trans Girl's Notes from the End of the World"
              author='Kai Cheng Thom'
              desc='A collection of personal poems and essays telling the need for radical love and radical empathy in a time of extreme political division.'
              genre='Nonfiction / Memoir / Poetry'
              path='https://www.cognitoforms.com/EmbraceTranarchy/CheckOutRequest'
            />
            </ul>
            <ul className='books__items'>
            <BookItem
              src='images/books/oneInEveryCrowd.jpg'
              title='One In Every Crowd'
              author='Ivan E. Coyote'
              desc=''
              genre='Nonfiction / Memoir / Short Stories'
              path='https://www.cognitoforms.com/EmbraceTranarchy/CheckOutRequest'
            />
            <BookItem
              src='images/books/dreadnought.jpg'
              title='Dreadnought: Nemesis #1'
              author='April Daniels'
              desc='A coming of age young adult novel about Danny who take son the mantle of Dreadnought and becomes what she has always wanted to be but finds difficulty when she has it. '
              genre='Fiction / Fantasy / Young Adult'
              path='https://www.cognitoforms.com/EmbraceTranarchy/CheckOutRequest'
            />
            <BookItem
              src='images/books/seeingGender.jpg'
              title='Seeing Gender: An Illustrated Guide to Identity and Expression'
              author='Iris Gottlieb'
              desc='This book covers a wide range of 2SLGBTQIA+ topics at an introductory level. Gottlieb discusses gender, identity, sexuality, and more paired with fun visuals!'
              genre='Nonfiction / Graphic Novel'
              path='https://www.cognitoforms.com/EmbraceTranarchy/CheckOutRequest'
            />
            </ul>
            <ul className='books__items'>
            <BookItem
              src='images/books/transFeministSelfHelpZine.png'
              title='Trans Feminist Self Help Zine Vol 0'
              author='Cat Haines'
              desc="This zine, the first in its series, seeks to specifically unpack the ways in which the medical-industrial complex can control, steal, and ultimately destroy trans peoples' bodies, body image, and comfortable embodiements."
              genre='Nonfiction / Self-Help / Zine'
              path='https://www.cognitoforms.com/EmbraceTranarchy/CheckOutRequest'
            />
            <BookItem
              src='images/books/theLesbianBody.png'
              title='The Lesbian Body'
              author='Cat Haines'
              desc="The Lesbian Body (2020) is a zine that seeks to trans-form Monique Wittig's classic lesbian text, The Lesbian Body (1973). This zine seeks to ad and enter into conversation with the original cissexist text."
              genre='Nonfiction / Zine'
              path='https://www.cognitoforms.com/EmbraceTranarchy/CheckOutRequest'
            />
            <BookItem
              src='images/books/callMeMax.jpg'
              title='Call Me Max'
              author='Kyle Lukoff and Luciano Lozano'
              desc="Follow Max as he makes new friends and reveals his feelings about his gender identity to his parents."
              genre='Childrens Picture Book'
              path='https://www.cognitoforms.com/EmbraceTranarchy/CheckOutRequest'
            />
            </ul>
            <ul className='books__items'>
            <BookItem
              src='images/books/amateur.jpg'
              title='Amateur: A True Story of What Makes a Man'
              author='Thomas Page McBee'
              desc='Thomas Page McBee explores what it means to be a man through the lens of his experience as a trans boxer. '
              genre='Nonfiction / Memoir'
              path='https://www.cognitoforms.com/EmbraceTranarchy/CheckOutRequest'
            />
            <BookItem
              src='images/books/detransitionBaby.jpg'
              title='Detransition, Baby'
              author='Torrey Peters'
              desc=''
              genre='Fiction / Contemporary'
              path='https://www.cognitoforms.com/EmbraceTranarchy/CheckOutRequest'
            />
            <BookItem
              src='images/books/queerSex.jpg'
              title='Queer Sex: A Trans and Non-Binary Guide to Intimacy, Pleasure, and Relationships'
              author='Juno Roche'
              desc=''
              genre='Nonfiction / Self-Help'
              path='https://www.cognitoforms.com/EmbraceTranarchy/CheckOutRequest'
            />
            </ul>
            <ul className='books__items'>
            <BookItem
              src='images/books/deathThreat.jpg'
              title='Death Threat'
              author='Vivek Shraya & Ness Lee'
              desc=''
              genre='Nonfiction / Graphic Novel'
              path='https://www.cognitoforms.com/EmbraceTranarchy/CheckOutRequest'
            />
            <BookItem
              src='images/books/itwasNevergoingToBeOkay.jpg'
              title='it was never going to be okay'
              author='jaye simpson'
              desc='A collection of poetry and prose discussion intergenerational trauma, indigeneity, and queerness, while addressing the urban Indigenous diaspora and breaking down the limits of sexual understanding as a trans woman. '
              genre='Nonfiction / Poetry'
              path='https://www.cognitoforms.com/EmbraceTranarchy/CheckOutRequest'
            />
            <BookItem
              src='images/books/dontCallUsDead.jpg'
              title="Don't Call Us Dead"
              author='Danez Smith'
              desc=''
              genre='Nonfiction / Poetry'
              path='https://www.cognitoforms.com/EmbraceTranarchy/CheckOutRequest'
            />
            </ul>
            <ul className='books__items'>
            <BookItem
              src='images/books/anUnkindnessOfGhosts.jpg'
              title='An Unkindness of Ghosts'
              author='Rivers Solomon'
              desc=''
              genre='Fiction / Dystopian / Fantasy'
              path='https://www.cognitoforms.com/EmbraceTranarchy/CheckOutRequest'
            />
            <BookItem
              src='images/books/transgenderHistory.jpg'
              title='Transgender History'
              author='Susan Stryker'
              desc='This book covers transgender history from the mid 20th century to the present day with each chapter covering major events. '
              genre='Nonfiction / History'
              path='https://www.cognitoforms.com/EmbraceTranarchy/CheckOutRequest'
            />
            <BookItem
              src='images/books/disintegrateDissociate.jpg'
              title='Disintegrate / Dissociate'
              author='Arielle Twist'
              desc='A collection of poetry exploring the complexities of human relationships as well as what it means to be an Indigenous trans woman. '
              genre='Nonfiction / Poetry'
              path='https://www.cognitoforms.com/EmbraceTranarchy/CheckOutRequest'
            />
            </ul>
            <ul className='books__items'>
            <BookItem
              src='images/books/theMoreYouKnow.jpg'
              title='The More You Know'
              author='Belan Tsegaye'
              desc=''
              genre='Poetry'
              path='https://www.cognitoforms.com/EmbraceTranarchy/CheckOutRequest'
            />
            <BookItem
              src='images/books/bornBoth.jpg'
              title='Born Both: An Intersex Life'
              author='Hida Viloria'
              desc=''
              genre='Nonfiction / Memoir'
              path='https://www.cognitoforms.com/EmbraceTranarchy/CheckOutRequest'
            />
            <BookItem
              src='images/books/neuroqueerHeresies.jpg'
              title='Neuroqueer Heresies: Notes on the Neurodiversity Paradigm, Autistic Empowerment, and Postnormal Possibilities'
              author='Nick Walker'
              desc='A collection of works by autistic and queer author Nick Walker on the neuroqueer experience with commentaries by the author.'
              genre='Nonfiction / Psychology'
              path='https://www.cognitoforms.com/EmbraceTranarchy/CheckOutRequest'
            />
            </ul>
            <ul className='books__items'>
            <BookItem
              src='images/books/2Trans2Furious.jpg'
              title='2 Trans 2 Furious: An extremely serious journal of Transgender Street Racing Studies'
              author='Tuck Woodstock & Niko Stratis'
              desc=''
              genre='Fiction / Nonfiction / Graphic Novel / Zine / Games'
              path='https://www.cognitoforms.com/EmbraceTranarchy/CheckOutRequest'
            />
            <BookItem
              src='images/catLookingUp.png'
              title='Nothing Catching Your Eye?'
              author='Let us fix that!'
              desc='Click here to tell us what genres, authors, or speific books you are interested in reading and we will take your feedback into consideration when seeking out new books'
              genre=''
              path='https://www.cognitoforms.com/EmbraceTranarchy/CommunityFeedback'
            />
            <BookItem
              src='images/catOnBooks.png'
              title=''
              author=''
              desc=''
              genre=''
              path='/borrow'
            />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Books;
